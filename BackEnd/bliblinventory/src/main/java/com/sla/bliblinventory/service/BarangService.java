package com.sla.bliblinventory.service;

import com.sla.bliblinventory.model.Barang;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Service
public class BarangService {
    @Autowired
    JdbcTemplate template;

    public List<Barang> findAll() {
        String sql = "select * from barang";
        RowMapper<Barang> rm = new RowMapper<Barang>() {
            @Override
            public Barang mapRow(ResultSet resultSet, int i) throws SQLException {
                Barang barang = new Barang(resultSet.getString("kode"),
                        resultSet.getString("nama"),
                        resultSet.getString("gambar"),
                        resultSet.getString("deskripsi"));
                return barang;
            }
        };
        return template.query(sql, rm);
    }

    public List<Barang> findByKode(String kode) {
        String sql = "select * from barang where kode ='"+kode+"'";
        RowMapper<Barang> rm = new RowMapper<Barang>() {
            @Override
            public Barang mapRow(ResultSet resultSet, int i) throws SQLException {
                Barang barang = new Barang(resultSet.getString("kode"),
                        resultSet.getString("nama"),
                        resultSet.getString("gambar"),
                        resultSet.getString("deskripsi"));
                return barang;
            }
        };
        return template.query(sql, rm);
    }
}
