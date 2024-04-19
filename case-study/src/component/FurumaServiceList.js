import React, { PureComponent } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import { toast } from "react-toastify";
import * as FurumaService from "../service/FurumaService";

function FurumaServiceList() {
  const [servicesList, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const getAll = async () => {
    const response = await FurumaService.getAllDichVu();
    const result = response.filter((dichVu) => {
      // Chuyển đổi cả tên sách và từ khóa tìm kiếm sang chữ thường và so sánh
      return dichVu.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setServices(result);
  };

  useState(() => {
    getAll();
  }, [searchTerm]);

  return (
    <>
      <table style={{ width: "100%", borderSpacing: "10px" }}>
        <tbody>
          <tr
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {servicesList.map((service) => (
              <td
                key={service.id}
                style={{
                  flex: "1 0 300px",
                  minWidth: "300px",
                  marginBottom: "20px",
                }}
              >
                <div className="card" style={{ height: "100%" }}>
                  <img
                    src={service.image}
                    className="card-img-top"
                    alt={service.name}
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                  <div className="card-body" style={{ height: "100%" }}>
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text">{service.area}</p>
                    <a href="#" className="btn btn-primary">
                      Edit
                    </a>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-toggle="modal"
                      data-target="#confirmDeleteModal"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default FurumaServiceList;
