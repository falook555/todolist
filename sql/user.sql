/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 100424
 Source Host           : localhost:3306
 Source Schema         : todolist

 Target Server Type    : MySQL
 Target Server Version : 100424
 File Encoding         : 65001

 Date: 24/05/2022 12:16:37
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `usr_id` int(5) NOT NULL AUTO_INCREMENT,
  `usr_username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `usr_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `usr_passwordcrd` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `usr_cid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `usr_fname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `usr_lname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `usr_dept` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `usr_tel` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `usr_img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `usr_insBy` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `usr_insDt` datetime(0) NULL DEFAULT NULL,
  `usr_upBy` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `usr_upDt` datetime(0) NULL DEFAULT NULL,
  `usr_status` int(1) NULL DEFAULT NULL,
  PRIMARY KEY (`usr_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'ict013', 'kq4au2', '7c10370d2bf5f54bdf8539dc7e33f442', '1100702529301', 'กนต์ธร', 'โทนทรัพย์', NULL, NULL, 'ict013.jpg', 'ict013', '2022-05-02 15:45:31', NULL, NULL, 1);
INSERT INTO `user` VALUES (2, 'ict008', 'ph4dd6', 'c2109807b90dd41d714fe4868f94d00b', '3640600162671', 'กฤษฎา', 'อนันตะ', NULL, NULL, 'ict008.jpg', 'ict013', '2022-05-02 15:45:31', NULL, NULL, 1);
INSERT INTO `user` VALUES (3, 'ict009', 'ph634k', 'def08538c63fc18384af3f6be46a0acb', '1640700015461', 'สุจินต์', 'สุกกล้า', NULL, NULL, 'ict009.jpg', 'ict013', '2022-05-02 15:45:31', NULL, NULL, 1);

SET FOREIGN_KEY_CHECKS = 1;
