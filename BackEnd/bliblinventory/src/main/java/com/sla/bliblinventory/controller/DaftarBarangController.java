package com.sla.bliblinventory.controller;

import com.sla.bliblinventory.model.Barang;
import com.sla.bliblinventory.service.BarangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/employee")
public class DaftarBarangController {

    private BarangService barangService;
    @Autowired
    public void setBarangService(BarangService barangService){
        this.barangService = barangService;
    }

    @GetMapping(value = "/sortByName")
    public List<Barang> listBarang(Model md){
        List<Barang> barang = barangService.sortByName();
        return barang;
    }

    @GetMapping(value = "/sortByCode")
    public List<Barang> listBarangByCode(Model md){
        List<Barang> barang = barangService.sortByCode();
        return barang;
    }
}
