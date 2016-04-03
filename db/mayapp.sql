/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50626
Source Host           : localhost:3306
Source Database       : mayapp

Target Server Type    : MYSQL
Target Server Version : 50626
File Encoding         : 65001

Date: 2016-04-03 22:10:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_perm`
-- ----------------------------
DROP TABLE IF EXISTS `t_perm`;
CREATE TABLE `t_perm` (
  `perm_id` int(11) NOT NULL AUTO_INCREMENT,
  `perm_name` varchar(255) NOT NULL,
  PRIMARY KEY (`perm_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='权限表';

-- ----------------------------
-- Records of t_perm
-- ----------------------------
INSERT INTO `t_perm` VALUES ('0', 'admin');
INSERT INTO `t_perm` VALUES ('1', 'user');
INSERT INTO `t_perm` VALUES ('2', 'swim');

-- ----------------------------
-- Table structure for `t_session`
-- ----------------------------
DROP TABLE IF EXISTS `t_session`;
CREATE TABLE `t_session` (
  `session_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) DEFAULT NULL,
  `session_date` datetime NOT NULL,
  `session_commert` varchar(1024) NOT NULL,
  PRIMARY KEY (`session_id`),
  KEY `FK_Reference_5` (`user_id`),
  CONSTRAINT `FK_Reference_5` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='一套训练';

-- ----------------------------
-- Records of t_session
-- ----------------------------

-- ----------------------------
-- Table structure for `t_set`
-- ----------------------------
DROP TABLE IF EXISTS `t_set`;
CREATE TABLE `t_set` (
  `set_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `session_id` bigint(20) NOT NULL,
  `pattern_id` smallint(6) NOT NULL,
  `set_lap` smallint(6) NOT NULL,
  `set_stroke` smallint(6) NOT NULL,
  `set_distance` smallint(6) NOT NULL,
  `set_calory` smallint(6) DEFAULT NULL,
  `set_efficiency` smallint(6) NOT NULL,
  `set_index` smallint(6) NOT NULL COMMENT '为0时，是total数据。\r\n            大于0，是分组数据',
  `set_time` time NOT NULL,
  `set_rest_time` time NOT NULL,
  `set_speed` smallint(6) NOT NULL,
  PRIMARY KEY (`set_id`),
  KEY `FK_Reference_3` (`session_id`),
  KEY `FK_Reference_4` (`pattern_id`),
  CONSTRAINT `FK_Reference_3` FOREIGN KEY (`session_id`) REFERENCES `t_session` (`session_id`),
  CONSTRAINT `FK_Reference_4` FOREIGN KEY (`pattern_id`) REFERENCES `t_stroke_pattern` (`pattern_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='分组训练';

-- ----------------------------
-- Records of t_set
-- ----------------------------

-- ----------------------------
-- Table structure for `t_stroke_pattern`
-- ----------------------------
DROP TABLE IF EXISTS `t_stroke_pattern`;
CREATE TABLE `t_stroke_pattern` (
  `pattern_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `pattern_name` varchar(100) NOT NULL,
  `pattern_describe` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`pattern_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='泳姿表';

-- ----------------------------
-- Records of t_stroke_pattern
-- ----------------------------
INSERT INTO `t_stroke_pattern` VALUES ('0', 'breaststroke', '蛙泳');
INSERT INTO `t_stroke_pattern` VALUES ('1', 'freestyle', '自由泳');
INSERT INTO `t_stroke_pattern` VALUES ('2', 'butterfly stroke', '蝶泳');
INSERT INTO `t_stroke_pattern` VALUES ('3', 'backstroke', '仰泳');

-- ----------------------------
-- Table structure for `t_user`
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `user_id` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_psd` varchar(255) NOT NULL,
  `user_create_time` date NOT NULL,
  `user_nick_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('a4b4fa8e28ad4de1ab4e2c8333d5dbf7', '蛙泳', '1234@123.com', 'mxl3', '2016-04-03', '蛙泳');
INSERT INTO `t_user` VALUES ('c5053135d4cf4fbaa7f00b2e3353cf0d', 'mxl', '1234@123.com', '90D162AA1F38EE74A8A7041BD2201BA4', '2016-03-31', 'mxl');
INSERT INTO `t_user` VALUES ('TEST_ID', 'TEST_NAME', 'TEST@TEST.com', 'TEST_PSD', '2016-04-03', 'TEST_NICK_NAME');

-- ----------------------------
-- Table structure for `user_to_perm`
-- ----------------------------
DROP TABLE IF EXISTS `user_to_perm`;
CREATE TABLE `user_to_perm` (
  `perm_id` int(11) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  KEY `FK_Reference_2` (`perm_id`),
  KEY `FK_Reference_6` (`user_id`),
  CONSTRAINT `FK_Reference_2` FOREIGN KEY (`perm_id`) REFERENCES `t_perm` (`perm_id`),
  CONSTRAINT `FK_Reference_6` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户权限关联表';

-- ----------------------------
-- Records of user_to_perm
-- ----------------------------
INSERT INTO `user_to_perm` VALUES ('1', 'c5053135d4cf4fbaa7f00b2e3353cf0d');
INSERT INTO `user_to_perm` VALUES ('1', 'a4b4fa8e28ad4de1ab4e2c8333d5dbf7');
INSERT INTO `user_to_perm` VALUES ('2', 'a4b4fa8e28ad4de1ab4e2c8333d5dbf7');
