import React, { PureComponent } from "react";

function furumaServiceList() {
  return (
    <>
    <body>
      <div class="container mt-4">
        <h2>Danh sách dịch vụ Furama</h2>
        <div class="row mt-4">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Villa A</h5>
                <p class="card-text">Diện tích: 300m2</p>
                <p class="card-text">Chi phí thuê: $1000</p>
                <p class="card-text">Số lượng người tối đa: 10</p>
                <p class="card-text">Kiểu thuê: Năm, Tháng, Ngày, Giờ</p>
                <a href="#" class="btn btn-primary">
                  Sửa
                </a>
                <button
                  type="button"
                  class="btn btn-danger"
                  data-toggle="modal"
                  data-target="#confirmDeleteModal"
                >
                  Xoá
                </button>
              </div>
            </div>
          </div>
        </div>

        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                Previous
              </a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div
        class="modal fade"
        id="confirmDeleteModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="confirmDeleteModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="confirmDeleteModalLabel">
                Xác nhận Xoá dịch vụ
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Bạn có chắc chắn muốn xoá dịch vụ này không?
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Hủy
              </button>
              <button type="button" class="btn btn-danger">
                Xoá
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer class="mt-4 text-center">
        <p>&copy; 2024 Furama Resort. All rights reserved.</p>
      </footer>

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </body>
    </>
  );
}

export default furumaServiceList;
