import React, {Component} from 'react';
import '../../../../stylesheets/inputs.css'
import searchIcon from '../../../../assets/search.svg';

class FilterForm extends Component {
  render () {
    return (
      <form className="filter-form" onSubmit={this.props.onFilterSubmit}>
        <select className='input m-right-2' name='filterField' value={this.props.filterField} onChange={this.props.onInputChange}>
          <option value=''></option>
          <option value='title'>
            titulo
          </option>
          <option value='author'>
            autor
          </option>
        </select>
        <div className='button-input'>
          <input className='input' name='filterValue' value={this.props.filterValue} onChange={this.props.onInputChange}/>
          <button className='search-input-button' type='submit'>
            <img src={searchIcon} alt='' />
          </button>
        </div>
      </form>
    );
  }
}

export default FilterForm;
