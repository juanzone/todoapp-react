import React, {Component} from 'react';
import CheckedListItem from './CheckedListItem';


class CheckedList extends Component {

  render(){
    return(
      <div className="row">
        <div className="col-xs-12">
          <h4> Tache récentes finies </h4>
          <table className="table table-striped">
            <thead>
              <tr>
                <td> Task name </td>
                <td> Date </td>
              </tr>
            </thead>
            <tbody>
              <CheckedListItem />
            </tbody>
          </table>
        </div>
      </div>
    )
  }


}

export default CheckedList;
