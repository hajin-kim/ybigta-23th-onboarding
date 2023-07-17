CREATE TABLE `배우` (
  `이름` varchar(255) PRIMARY KEY,
  `성별` enum,
  `출생` date
);

CREATE TABLE `영화` (
  `제목` varchar(255) PRIMARY KEY,
  `개봉` date,
  `감독이름` varchar(255)
);

CREATE TABLE `감독` (
  `이름` varchar(255) PRIMARY KEY,
  `출생` date
);

CREATE TABLE `영화배역` (
  `영화제목` varchar(255),
  `배우이름` varchar(255),
  `배역` varchar(255),
  PRIMARY KEY (`영화제목`, `배우이름`)
);

ALTER TABLE `영화` ADD FOREIGN KEY (`감독이름`) REFERENCES `감독` (`이름`);

ALTER TABLE `영화배역` ADD FOREIGN KEY (`영화제목`) REFERENCES `영화` (`제목`);

ALTER TABLE `영화배역` ADD FOREIGN KEY (`배우이름`) REFERENCES `배우` (`이름`);
