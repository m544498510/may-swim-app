/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2016/3/27 10:33:58                           */
/*==============================================================*/


drop table if exists t_perm;

drop table if exists t_session;

drop table if exists t_set;

drop table if exists t_stroke_pattern;

drop table if exists t_user;

drop table if exists user_to_perm;

/*==============================================================*/
/* Table: t_perm                                                */
/*==============================================================*/
create table t_perm
(
   perm_id              int not null auto_increment,
   perm_name            varchar(255) not null,
   primary key (perm_id)
);

alter table t_perm comment 'Ȩ�ޱ�';

/*==============================================================*/
/* Table: t_session                                             */
/*==============================================================*/
create table t_session
(
   session_id           bigint not null,
   user_id              int,
   session_date         datetime not null,
   session_commert      varchar(1024) not null,
   primary key (session_id)
);

alter table t_session comment 'һ��ѵ��';

/*==============================================================*/
/* Table: t_set                                                 */
/*==============================================================*/
create table t_set
(
   set_id               bigint not null,
   session_id           bigint not null,
   pattern_id           smallint not null,
   set_lap              smallint not null,
   set_stroke           smallint not null,
   set_distance         smallint not null,
   set_calory           smallint,
   set_efficiency       smallint not null,
   set_index            smallint not null comment 'Ϊ0ʱ����total���ݡ�
            ����0���Ƿ�������',
   set_time             time not null,
   set_rest_time        time not null,
   set_speed            smallint not null,
   primary key (set_id)
);

alter table t_set comment '����ѵ��';

/*==============================================================*/
/* Table: t_stroke_pattern                                      */
/*==============================================================*/
create table t_stroke_pattern
(
   pattern_id           smallint not null,
   pattern_name         varchar(100) not null,
   primary key (pattern_id)
);

alter table t_stroke_pattern comment 'Ӿ�˱�';

/*==============================================================*/
/* Table: t_user                                                */
/*==============================================================*/
create table t_user
(
   user_id              int not null auto_increment,
   user_name            varchar(255) not null,
   user_email           varchar(255),
   user_psd             varchar(255) not null,
   user_create_time     date not null,
   primary key (user_id)
);

/*==============================================================*/
/* Table: user_to_perm                                          */
/*==============================================================*/
create table user_to_perm
(
   user_id              int,
   perm_id              int
);

alter table user_to_perm comment '�û�Ȩ�޹�����';

alter table t_session add constraint FK_Reference_5 foreign key (user_id)
      references t_user (user_id) on delete restrict on update restrict;

alter table t_set add constraint FK_Reference_3 foreign key (session_id)
      references t_session (session_id) on delete restrict on update restrict;

alter table t_set add constraint FK_Reference_4 foreign key (pattern_id)
      references t_stroke_pattern (pattern_id) on delete restrict on update restrict;

alter table user_to_perm add constraint FK_Reference_1 foreign key (user_id)
      references t_user (user_id) on delete restrict on update restrict;

alter table user_to_perm add constraint FK_Reference_2 foreign key (perm_id)
      references t_perm (perm_id) on delete restrict on update restrict;

