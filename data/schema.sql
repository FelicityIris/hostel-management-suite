CREATE IF NOT EXISTS tenants (
	id BIGINT PRIMARY KEY,
	
	name VARCHAR(100) NOT NULL,
	registration_number VARCHAR(50) NOT NULL,
	phone_number BIGINT,
	email_address VARCHAR(50),
	
	building_id INT,
	room_id BIGINT,
	
	stay_begin DATETIME,
	stay_end DATETIME,
	
	FOREIGN KEY (room_id)
		REFERENCES rooms(id)
		ON DELETE CASCADE,
	FOREIGN KEY (building_id)
		REFERENCES buildings(id)
		ON DELETE CASCADE
);

CREATE IF NOT EXISTS buildings (
	id INT PRIMARY KEY,
	
	name VARCHAR(100) NOT NULL
);

CREATE IF NOT EXISTS rooms (
	id BIGINT PRIMARY KEY,
	
	building_id INT NOT NULL,
	number INT NOT NULL,
	bed_count INT,
	is_ac BOOLEAN,
	
	FOREIGN KEY (building_id)
		REFERENCES buildings(id)
		ON DELETE CASCADE
);

CREATE IF NOT EXISTS service_requests (
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
	
	tenant_id BIGINT,
	
	request_type ENUM(
		'Cleaning',
		'Pest Control',
		'Carpenter',
		'Electrician',
		'Others'
	),
	request_description TEXT,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	
	is_staff_alloted BOOLEAN,
	staff_id BIGINT,
	
	is_resolved BOOLEAN,
	resolved_at DATETIME,
	resolution_note TEXT,
	
	FOREIGN KEY (tenant_id)
		REFERENCES tenants(id)
		ON DELETE CASCADE,
	FOREIGN KEY (staff_id)
		REFERENCES employees(id)
		ON DELETE CASCADE
	
);

CREATE IF NOT EXISTS employees (
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
	
	name VARCHAR(100) NOT NULL,
	registration_number VARCHAR(50) NOT NULL,
	phone_number BIGINT NOT NULL,
	email_address VARCHAR(50) NOT NULL,
	
	role ENUM('Management', 'Maintenance', 'NA') NOT NULL,
	
	employment_start DATETIME NOT NULL,
	employment_end DATETIME
);