/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2016/4/7 17:36:07                            */
/*==============================================================*/


drop table if exists t_role;

drop table if exists t_session;

drop table if exists t_set;

drop table if exists t_stroke_pattern;

drop table if exists t_user;

drop table if exists user_to_role;

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
   session_commert      varchar(1024) not null,
   swim_long            smallint,
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
   set_index            smallint not null comment '为0时，是total数据。
            大于0，是分组数据',
   set_lap              smallint not null,
   set_stroke           smallint not null,
   set_distance         smallint not null,
   set_calorie          smallint not null,
   set_efficiency       smallint not null,
   set_training_time    float,
   set_rest_time        float not null,
   set_time             float not null,
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

alter table t_set add constraint FK_Reference_4 foreign key (pattern_id)
      references t_stroke_pattern (pattern_id) on delete restrict on update restrict;

alter table user_to_role add constraint FK_Reference_6 foreign key (user_id)
      references t_user (user_id) on delete cascade on update cascade;

alter table user_to_role add constraint FK_Reference_7 foreign key (role_id)
      references t_role (role_id) on delete restrict on update restrict;

