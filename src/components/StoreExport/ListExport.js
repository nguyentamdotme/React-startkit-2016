import React from 'react';
import PropTypes from 'prop-types';

import Card, {
  CardContent, CardMedia
} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Autosuggest from 'react-autosuggest';
import TextField from 'material-ui/TextField';
import Search from 'material-ui-icons/Search';
import Delete from 'material-ui-icons/Delete';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';

import PaperToolbar from './ToolbarSearch'

class ListExport extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <Grid container style={{padding: 25}} >
          <Typography type="headline" component="h3">
            Xuất Hàng
          </Typography>
        </Grid>
        <Paper>
          <PaperToolbar search={false}/>
        </Paper>
        <Paper>
          <Grid container className="itemInput">
            <Grid item xs={6} md={2} className="imgProductWrapper">
              <img className="imgProduct" src="https://goo.gl/SUijKR"/>
            </Grid>
            <Grid item xs={6} md={10}>
              <Grid container className="productInfo">
                <Grid item xs={12} md={8} className="basicInfo">
                  <Typography component="h4">Live From Space</Typography>
                  <Typography component="h5" color="secondary">
                    Mac Miller
                  </Typography>
                  <p>Giá nhập: 180$ - Giá bán: 200$</p>
                  <div>
                    So luong:
                    <TextField
                      type="number"
                      defaultValue="10"
                      className="inputQuantum"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={4}className="itemFunction">
                  <Grid container>
                    <Grid item xs={6} md={6}>
                      <h3 className="priceTotal"><span>1800$</span></h3>
                    </Grid>
                    <Grid item xs={6} md={6} className="textCenter">
                      <IconButton
                        color="primary"
                        aria-label="delete"
                        className="iconDelete"
                      >
                        <Delete/>
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Paper>
          <Grid container>
            <Grid item xs={8} md={8}>
              <Typography
                type="headline"
                component="h1"
                color="accent"
                align="right"
              >
                Thành tiền:
              </Typography>
            </Grid>
            <Grid item xs={4} md={2}>
              <Typography
                type="headline"
                component="h1"
                color="accent"
                align="center"
              >
                0.00
              </Typography>
            </Grid>
            <Grid item xs={4} md={2}>
              <Button raised color="primary">
                Hoàn Thành
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default ListExport;
