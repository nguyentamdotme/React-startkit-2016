import React from 'react';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import AddAPhoto from 'material-ui-icons/AddAPhoto';

export default props => {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Tên Sản Phẩm"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="selectField">
            <label>Loại sản phẩm</label>
            <select>
              <option readOnly value="0">Chọn</option>
              <option value="1">ABC</option>
              <option value="2">BCD</option>
            </select>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Giá nhập"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Giá bán"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="selectField">
            <label>Nhà cung cấp</label>
            <select>
              <option readOnly value="0">Chọn</option>
              <option value="1">ABC</option>
              <option value="2">BCD</option>
            </select>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Số lượng"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <input accept="jpg,jpeg,JPG,JPEG" id="file" type="file" />
          <label htmlFor="file">
            <IconButton component="span" className="btnUploadImg">
              <AddAPhoto className="iconUploadImg"/>
            </IconButton>
          </label>
        </Grid>
      </Grid>
    </div>
  );
};
