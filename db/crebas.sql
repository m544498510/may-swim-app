/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2016/4/9 10:09:27                            */
/*==============================================================*/

SET FOREIGN_KEY_CHECKS = 0;

drop table if exists t_role;

drop table if exists t_session;

drop table if exists t_set;

drop table if exists t_stroke;

drop table if exists t_user;

drop table if exists user_to_role;
SET FOREIGN_KEY_CHECKS = 1;

/*==============================================================*/
/* Table: t_role                                                */
/*==============================================================*/
create table t_role
(
   role_id              int not null auto_increment,
   role_name            varchar(255) not null,
   role_des             varchar(255),
   primary key (role_id)
);

alter table t_role comment '角色表';

/*==============================================================*/
/* Table: t_session                                             */
/*==============================================================*/
create table t_session
(
   session_id           bigint not null auto_increment,
   user_id              varchar(255) not null,
   session_date         datetime not null,
   session_des          varchar(1024) not null,
   pool_length          int,
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
   stroke_id            int,
   set_index            int not null comment '为0时，是total数据。
            大于0，是分组数据',
   set_lap              int not null,
   set_stroke_num       int not null,
   set_distance         int not null,
   set_calorie          int not null,
   set_efficiency       int not null,
   set_training_time    float,
   set_rest_time        float not null,
   set_time             float not null,
   set_speed            int not null,
   primary key (set_id)
);

alter table t_set comment '分组训练';

/*==============================================================*/
/* Table: t_stroke                                              */
/*==============================================================*/
create table t_stroke
(
   stroke_id            int not null auto_increment,
   stroke_name          varchar(100) not null,
   stroke_des           varchar(255),
   primary key (stroke_id)
);

alter table t_stroke comment '泳姿表';

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
   user_face       		varchar(1024),

   primary key (user_id)
);

/*==============================================================*/
/* Table: user_to_role                                          */
/*==============================================================*/
create table user_to_role
(
   user_id              varchar(255),
   role_id              int
);

alter table user_to_role comment '用户角色关联表';

alter table t_session add constraint FK_Reference_5 foreign key (user_id)
      references t_user (user_id) on delete cascade on update cascade;

alter table t_set add constraint FK_Reference_3 foreign key (session_id)
      references t_session (session_id) on delete cascade on update cascade;

alter table t_set add constraint FK_Reference_8 foreign key (stroke_id)
      references t_stroke (stroke_id) on delete restrict on update restrict;

alter table user_to_role add constraint FK_Reference_6 foreign key (user_id)
      references t_user (user_id) on delete cascade on update cascade;

alter table user_to_role add constraint FK_Reference_7 foreign key (role_id)
      references t_role (role_id) on delete restrict on update restrict;

INSERT INTO `t_role` VALUES ('1', 'admin','管理员');
INSERT INTO `t_role` VALUES ('2', 'user','普通用户');
INSERT INTO `t_role` VALUES ('3', 'swim','游泳者');

INSERT INTO `t_user` VALUES ('c5053135d4cf4fbaa7f00b2e3353cf0d', 'mxl', '1234@123.com', '90D162AA1F38EE74A8A7041BD2201BA4', '2016-03-31', 'mxl');
INSERT INTO `t_user` VALUES ('TEST_ID', 'TEST_NAME', 'TEST@TEST.COM', 'TEST_PSD', '2016-03-31', 'TEST_NICK_NAME');

INSERT INTO `user_to_role` VALUES ('TEST_ID','2');

INSERT INTO `t_stroke` VALUES ('1', 'breaststroke', '蛙泳');
INSERT INTO `t_stroke` VALUES ('2', 'freestyle', '自由泳');
INSERT INTO `t_stroke` VALUES ('3', 'butterfly stroke', '蝶泳');
INSERT INTO `t_stroke` VALUES ('4', 'backstroke', '仰泳');

INSERT INTO `t_session` VALUES ('1','TEST_ID','2016-3-31','','25');

INSERT INTO `t_set` VALUES ('2','1','1','0','4','10','100','89','55','182','80','262','10');
INSERT INTO `t_set` VALUES ('1','1','1','1','4','10','100','89','55','182','80','262','10');