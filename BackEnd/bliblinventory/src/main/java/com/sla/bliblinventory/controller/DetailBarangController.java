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
public class DetailBarangController {

    private BarangService barangService;
    @Autowired
    public void setBarangService(BarangService barangService){
        this.barangService = barangService;
    }

    @GetMapping(value = "/{param1}")
    public Barang listBarang(Model md, @PathVariable(value = "param1") String param1){
        List<Barang> barang = barangService.findByKode(param1);
        md.addAttribute("barang", barangService.findByKode(param1));
        return barang.get(0);
    }
}
