package com.may.swim.service.impl;

import com.may.swim.SwimTestUtil;
import com.may.swim.model.Session;
import com.may.swim.model.Set;
import com.may.swim.model.Stroke;
import com.may.swim.service.ISwimService;
import com.may.test.BaseTest;
import org.junit.Test;

import javax.annotation.Resource;
import java.util.ArrayList;

import static org.junit.Assert.assertTrue;

/**
 * @author :    Mei XinLin
 * @version :   1.0
 */
public class SwimServiceImplTest extends BaseTest {
    @Resource(name="swimService")
    private ISwimService iSwimService;

    @Test
    public void testGetAllStroke() throws Exception {
        ArrayList<Stroke> list =iSwimService.getAllStroke();
        Stroke stroke = list.get(0);
        assertTrue(list.size() >= 4);
        assertTrue("breaststroke".equals(stroke.getStrokeName()));
    }

    @Test
    public void testCreateSession() throws Exception {
        Session session = SwimTestUtil.createSession();
        assertTrue(iSwimService.createSession(session));
    }

    @Test
    public void testUpdateSession() throws Exception {
        Session session = SwimTestUtil.createSession();
        iSwimService.createSession(session);
        session.setPoolLength(77);
        assertTrue(iSwimService.updateSession(session));
    }

    @Test
    public void testDelSession() throws Exception {
        assertTrue(iSwimService.delSession(1L));
    }

    @Test
    public void testGetSessionByUserId() throws Exception {
        ArrayList<Session> list = iSwimService.getSessionByUserId("TEST_ID",null);
        assertTrue(list.size() > 0);
    }

    @Test
    public void testCreateSetList() throws Exception {
        ArrayList<Set> list = SwimTestUtil.createSetList(1L);
        assertTrue(iSwimService.createSetList(list));

    }

    @Test
    public void testUpdateSet() throws Exception {
        ArrayList<Set> list = iSwimService.getSetBySessionId(1L,null);
        Set set = list.get(0);
        assertTrue(iSwimService.updateSet(set));
    }

    @Test
    public void testDelSetById() throws Exception {
        assertTrue(iSwimService.delSetById(1L,1L));
    }

    @Test
    public void testDelSetBySessionId() throws Exception {
        assertTrue(iSwimService.delSetBySessionId(1L));
    }

    @Test
    public void testGetSetBySessionId() throws Exception {
        ArrayList<Set> list = iSwimService.getSetBySessionId(1L, null);
        assertTrue(list.size() > 0);
    }

    @Test
    public void testCalTotalSet() throws Exception {
        Session session = SwimTestUtil.createSession();
        iSwimService.createSession(session);

        ArrayList<Set> list = SwimTestUtil.createSetList(session.getSessionId());
        iSwimService.createSetList(list);

        list = iSwimService.getSetBySessionId(1L,null);
        int distance1 = list.get(0).getSetDistance();
        assertTrue(testCalDistance(list));

        Set set = list.get(3);
        set.setSetDistance(700);
        iSwimService.updateSet(set);

        list = iSwimService.getSetBySessionId(1L,null);
        int distance2 = list.get(0).getSetDistance();
        assertTrue(testCalDistance(list));
        assertTrue(distance1 != distance2);

    }

    private boolean testCalDistance(ArrayList<Set> list){
        int distance = 0;
        for (int i = 1; i < list.size(); i++) {
            distance += list.get(i).getSetDistance();
        }
        return (distance == list.get(0).getSetDistance());
    }


}