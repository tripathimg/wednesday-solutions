CREATE TABLE vehicle_details (
  id INT NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  vmodel VARCHAR(64) DEFAULT '' COMMENT 'Vehicle Model',
  vnum VARCHAR(32) DEFAULT '' COMMENT 'Vehicle Number',
  curr_lat DECIMAL(10,8) COMMENT 'Current Lattitude.',
  curr_lng DECIMAL(11,8) COMMENT 'Current Longitude.',
  added_by INT(11) NULL DEFAULT NULL,
  modified_by INT(11) NULL DEFAULT NULL,
  created_at DATETIME NULL DEFAULT NULL,
  modified_at DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (id)
 );

