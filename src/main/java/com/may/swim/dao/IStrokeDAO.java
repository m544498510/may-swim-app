package com.may.swim.dao;

import com.may.swim.model.Stroke;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

/**
 * @author :    Mei XinLin
 * @version :   1.0
 */

@Repository
public interface IStrokeDAO {
    ArrayList<Stroke> getAllRows();
}
