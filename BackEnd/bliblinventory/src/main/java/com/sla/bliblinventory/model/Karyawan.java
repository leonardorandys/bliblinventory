package com.sla.bliblinventory.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="karyawan")
public class Karyawan {

    @Id
    @Column(name="id")
    private String id;
    @Column(name="nama")
    private String nama;
    @Column(name="password")
    private String password;

    public Karyawan(){

    }
    public Karyawan(Karyawan karyawan){
        this.id = karyawan.getId();
        this.nama = karyawan.getNama();
        this.password = karyawan.getPassword();
    }

    public Karyawan(String id, String nama, String password){
        this.id = id;
        this.nama = nama;
        this.password = password;
    }

    //gettersetter
    public String getId() {
        return id;
    }
    public String getNama() {
        return nama;
    }
    public void setNama(String nama) {
        this.nama = nama;
    }
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
