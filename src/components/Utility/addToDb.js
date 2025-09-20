import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const getStoredBook = () =>{

  const storedBookStr = localStorage.getItem("readList");
  if(storedBookStr){
    const storedBookData = JSON.parse(storedBookStr);
    return storedBookData;
  }
  else{
    return [];
  }

}

const addToStoreDB = (id)=>{

const storedBookData = getStoredBook();

if(storedBookData.includes(id)){

Swal.fire({
  icon: "error",
  title: "Already exist",
});

}
else{
  storedBookData.push(id);
const data=JSON.stringify(storedBookData);  
localStorage.setItem('readList', data);

// Sweet Alert Start

MySwal.fire({
  title: "Added in LocalStorage.",
  icon: "success",
});

// Sweet Alert End
}

}

export {addToStoreDB, getStoredBook};  