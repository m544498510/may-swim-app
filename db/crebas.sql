/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2016/4/7 14:09:19                            */
/*==============================================================*/

SET FOREIGN_KEY_CHECKS = 0;

drop table if exists t_perm;

drop table if exists t_session;

drop table if exists t_set;

drop table if exists t_stroke_pattern;

drop table if exists t_user;

drop table if exists user_to_perm;

SET FOREIGN_KEY_CHECKS = 1;

/*==============================================================*/
/* Table: t_perm                                                */
/*==============================================================*/
create table t_perm
(
   perm_id              int not null auto_increment,
   perm_name            varchar(255) not null,
   primary key (perm_id)
);

alter table t_perm comment '权限表';

/*==============================================================*/
/* Table: t_session                                             */
/*==============================================================*/
create table t_session
(
   session_id           bigint not null auto_increment,
   user_id              varchar(255) not null,
   session_date         datetime not null,
   session_commert      varchar(1024) not null,
   primary key (session_id)
);

alter table t_session comment '一套训练';

/*==============================================================*/
/* Table: t_set                                                 */
/*==============================================================*/
create table t_set
(
   set_id               bigint not null auto_increment,
   session_id           bigint not null,
   pattern_id           smallint not null,
   set_lap              smallint not null,
   set_stroke           smallint not null,
   set_distance         smallint not null,
   set_calory           smallint not null,
   set_efficiency       smallint not null,
   set_index            smallint not null comment '为0时，是total数据。
            大于0，是分组数据',
   set_time             float not null,
   set_rest_time        float not null,
   set_speed            smallint not null,
   primary key (set_id)
);

alter table t_set comment '分组训练';

/*==============================================================*/
/* Table: t_stroke_pattern                                      */
/*==============================================================*/
create table t_stroke_pattern
(
   pattern_id           smallint not null auto_increment,
   pattern_name         varchar(100) not null,
   pattern_des          varchar(255),
   primary key (pattern_id)
);

alter table t_stroke_pattern comment '泳姿表';

/*==============================================================*/
/* Table: t_user                                                */
/*==============================================================*/
create table t_user
(
   user_id              varchar(255) not null,
   user_name            varchar(255) not null,
   user_email           varchar(255),
   user_psd             varchar(255) not null,
   user_create_time     date not null,
   user_nick_name       varchar(255),
   primary key (user_id)
);

/*==============================================================*/
/* Table: user_to_perm                                          */
/*==============================================================*/
create table user_to_perm
(
   perm_id              int,
   user_id              varchar(255)
);

alter table user_to_perm comment '用户权限关联表';

alter table t_session add constraint FK_Reference_5 foreign key (user_id)
      references t_user (user_id) on delete restrict on update restrict;

alter table t_set add constraint FK_Reference_3 foreign key (session_id)
      references t_session (session_id) on delete restrict on update restrict;

alter table t_set add constraint FK_Reference_4 foreign key (pattern_id)
      references t_stroke_pattern (pattern_id) on delete restrict on update restrict;

alter table user_to_perm add constraint FK_Reference_2 foreign key (perm_id)
      references t_perm (perm_id) on delete restrict on update restrict;

alter table user_to_perm add constraint FK_Reference_6 foreign key (user_id)
      references t_user (user_id) on delete restrict on update restrict;

INSERT INTO `t_perm` VALUES ('1', 'admin');
INSERT INTO `t_perm` VALUES ('2', 'user');
INSERT INTO `t_perm` VALUES ('3', 'swim');

INSERT INTO `t_user` VALUES ('c5053135d4cf4fbaa7f00b2e3353cf0d', 'mxl', '1234@123.com', '90D162AA1F38EE74A8A7041BD2201BA4', '2016-03-31', 'mxl');
INSERT INTO `t_user` VALUES ('TEST_ID', 'TEST_NAME', 'TEST@TEST.COM', 'TEST_PSD', '2016-03-31', 'TEST_NICK_NAME');

INSERT INTO `user_to_perm` VALUES ('2', 'c5053135d4cf4fbaa7f00b2e3353cf0d');

INSERT INTO `t_stroke_pattern` VALUES ('1', 'breaststroke', '蛙泳');
INSERT INTO `t_stroke_pattern` VALUES ('2', 'freestyle', '自由泳');
INSERT INTO `t_stroke_pattern` VALUES ('3', 'butterfly stroke', '蝶泳');
INSERT INTO `t_stroke_pattern` VALUES ('4', 'backstroke', '仰泳');

