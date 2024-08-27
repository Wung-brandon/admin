
export const userColumn = [
    { field: 'id', headerName: 'ID', width: 70 },
    {field: 'user', headerName: 'User', width:230, renderCell: (params) => {
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="img"/>
                {params.row.username}
            </div>
        )
    }},
    {field:'email', headerName:"Email", width:230},
    {field:'age', headerName:"Age", width:100},
    {field:"status", headerName:"Status", width:160,
         renderCell: (params) => {
            return(
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
         }
    }
]


export const userRows = [
    {
      img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
      username:"john doe",
      status:"active",
      email:"1@gmail.com",
      age:30
    },
    {
        img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
        username:"magdelene",
        status:"passive",
        email:"245gmail.com",
        age:40
      },
      {
        img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
        username:"mary doe",
        status:"active",
        email:"wx@gmail.com",
        age:19
      },
      {
        img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
        username:"levi",
        status:"passive",
        email:"7dv@gmail.com",
        age:27
      },
      {
        img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
        username:"daniel",
        status:"pending",
        email:"qxw@gmail.com",
        age:19
      },
      {
        img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
        username:"kelvin",
        status:"active",
        email:"kel@gmail.com",
        age:30
      },
      {
        img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
        username:"enow",
        status:"active",
        email:"enow@gmail.com",
        age:27
      },
      {
        img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
        username:"richard",
        status:"passive",
        email:"aze@gmail.com",
        age:20
      },
      {
        img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
        username:"afroritaa",
        status:"pending",
        email:"ritaa@gmail.com",
        age:19
      },
      {
        img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
        username:"venia",
        status:"passive",
        email:"venia@gmail.com",
        age:23
      },
    
  
  ];
  
  userRows.forEach((product, index) => {
    product.id = index + 1;
    // console.log("id",product.id, product.title)
  });
  
  