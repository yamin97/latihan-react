import React, {useState} from 'react';
import { DropdownItem, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap'

const DropdownCustom = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  console.log(props.dataList[0])
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Dropdown
        </DropdownToggle>
      <DropdownMenu>
        {props.dataList.map((val) => {
          return (
          <DropdownItem key={val.id} onClick={() => alert(val.first_name)}>{val.first_name}</DropdownItem>
          )
        })}
      </DropdownMenu>
    </Dropdown>
  )
}

 
export default DropdownCustom;