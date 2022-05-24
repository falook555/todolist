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

 Date: 24/05/2022 12:16:26
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for todolists
-- ----------------------------
DROP TABLE IF EXISTS `todolists`;
CREATE TABLE `todolists`  (
  `td_id` int(11) NOT NULL AUTO_INCREMENT,
  `usr_username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `td_case` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `td_dept` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `td_repair` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `td_insBy` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `td_insDt` datetime(0) NULL DEFAULT NULL,
  `td_upBy` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `td_upDt` datetime(0) NULL DEFAULT NULL,
  `td_status` int(1) NULL DEFAULT NULL,
  PRIMARY KEY (`td_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of todolists
-- ----------------------------
INSERT INTO `todolists` VALUES (1, 'ict013', 'เสียบไฟแล้วเปิดเครื่องสำรองไฟไม่ติด', 'อายุกรรมชาย', 'ตรวจสอบแล้วพบว่าแบตเตอรี่เสื่อมสภาพ ทำการเปลี่ยนแบตเตอรี่ให้ใหม่', 'ict013', '2022-05-19 09:13:24', 'ict013', '2022-05-19 09:13:56', 9);
INSERT INTO `todolists` VALUES (2, 'ict013', 'เครื่องปริ้นกระดาษติด', 'ตึกสงฆ์', 'ดึงกระดาษ และทำความสะอาดที่ดรั้มหมึกที่มีเศษกระดาษติดอยู่', 'ict013', '2022-05-19 09:14:41', 'undefined', '2022-05-19 09:19:37', 9);
INSERT INTO `todolists` VALUES (3, 'ict013', 'เสียบไฟแล้วเปิดเครื่องสำรองไฟไม่ติด', 'ตึกสงฆ์', NULL, 'ict013', '2022-05-19 09:19:45', 'ict013', '2022-05-19 09:19:49', 9);
INSERT INTO `todolists` VALUES (4, 'ict013', 'เสียบไฟแล้วเปิดเครื่องสำรองไฟไม่ติด', 'ตึกสงฆ์', 'ตรวจสอบแล้วพบว่าแบตเตอรี่เสื่อมสภาพ ทำการเปลี่ยนแบตเตอรี่ให้ใหม่', 'ict013', '2022-05-19 13:12:30', 'undefined', '2022-05-19 13:13:48', 9);
INSERT INTO `todolists` VALUES (5, 'ict013', 'เครื่องปริ้นกระดาษติด', 'กลุ่มงานทันตกรรม', 'ดึงกระดาษ และทำความสะอาดที่ดรั้มหมึกที่มีเศษกระดาษติดอยู่', 'ict013', '2022-05-19 14:27:35', 'ict013', '2022-05-19 14:29:57', 1);
INSERT INTO `todolists` VALUES (6, 'ict013', 'หหหหหหหหหหหหหหหหหหหห', 'เวชกรรมสังคม', NULL, 'ict013', '2022-05-19 14:31:29', NULL, NULL, 0);
INSERT INTO `todolists` VALUES (7, 'ict013', 'หกฟหกฟหกฟหกฟกฟหฟหกเดฟฟหกดหกดฟหกดเ้่าสวงฟหกดเ่าสวงงฟหกดสาฟหกดสานสนสนำสนกสำนสกนอามทอน', 'ห้องผ่าตัด', NULL, 'ict013', '2022-05-19 14:33:43', NULL, NULL, 0);

SET FOREIGN_KEY_CHECKS = 1;
