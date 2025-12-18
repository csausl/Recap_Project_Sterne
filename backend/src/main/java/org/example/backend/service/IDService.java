package org.example.backend.service;

import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class IDService {
    public String createId(){
        return UUID.randomUUID().toString();
    }
}
