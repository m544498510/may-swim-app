package com.may.util;

import java.util.UUID;

/****
 * UUID生成器
 * @author Administrator
 *
 */
public class UUIDFactory {
	public final static String getUUID(){
		return UUID.randomUUID().toString().replace("-", "") ;
	}
}
