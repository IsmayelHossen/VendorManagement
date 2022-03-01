// //data tabel
// import { Table } from 'antd';
// import 'antd/dist/antd.css';
// import { itemRender, onShowSizeChange } from "../../paginationfunction"
// import "../../antdstyle.css"
// import { useState } from 'react';
// //data table
// const Testcase = () => {
//     const [users,setData]=useState([]);
//     useEffect(() => {
//         const getUsers = () => {
//             setIsLoading(true);
//             fetch(``)
//                 .then(res => {

//                     // You have to send it, as I have done below
//                     if (res.status >= 400) {
//                         throw new Error("Server responds with error!")
//                     }
//                     return res.json()
//                 })
//                 .then(users => {
//                     setData(users.items);
//                     setIsLoading(false);
//                     setLoadUpdate(false);
//                 },

//                     err => {
//                         setHasError(true);
//                         setIsLoading(true);
//                     })
//         };
//         getUsers()
//     }, [])
//     const columns = [
//         {
//             title: 'Name',
//             dataIndex: 'child_name',
//             render: (text, record) => (
//                 <h2 className="table-avatar">
//                     <Link to={`employeeprofile/${record.employe_id}`} >  {record.child_photo_path ?
//                         <div >
//                             <img className="avatar" src={`http://192.168.3.232:2001/static${record.child_photo_path}`} />

//                         </div>
//                         :
//                         <div >
//                             <img className="avatar" src={placeholderImg} />
//                         </div>
//                     }
//                     </Link>
//                     <Link to={`employeeprofile/${record.employe_id}`}>{text} <span>{record.designation}</span></Link>
//                 </h2>
//             ),

//         },
//         {
//             title: 'Gender',
//             dataIndex: 'gender',

//         },

//         {
//             title: 'Birth Date',
//             dataIndex: 'date_birth',

//         },

//         {
//             title: 'School',
//             dataIndex: 'school',

//         },
//         {
//             title: 'Class',
//             dataIndex: 'child_class',

//         },
//         {
//             title: 'Certificate',
//             dataIndex: 'certificate_path',

//         },

//         {
//             title: 'Action',
//             render: (text, record) => (
//                 <Link to={`/allemployees/employeeprofile/${record.employe_id}`}  >
//                     <HashLink to={`/allemployees/employeeprofile/${record.employe_id}#childrenHash`}>   <a href="#" className="action-icon" aria-expanded="false"><i className="material-icons">more_vert</i></a></HashLink></Link>
//             ),

//         },

//     ]
//   return (
//     <div className="page-wrapper my-5">
//     <div className="row">
//                     <div className="col-md-12">
//                         <div className="table-responsive">

//                             <Table className="table-striped"
//                                 pagination={{
//                                     total: data.length,
//                                     showTotal: (total, range) => Showing ${range[0]} to ${range[1]} of ${total} entries,
//                                     showSizeChanger: true, onShowSizeChange: onShowSizeChange, itemRender: itemRender
//                                 }}
//                                 style={{ overflowX: 'auto' }}
//                                 columns={columns}
//                                 // bordered
//                                 dataSource={data}
//                                 rowKey={record => record.id}
//                                 onChange={console.log("change")}
//                             />
//                         </div>
//                     </div>
//                 </div>
//     </div>
//   );
// };

// export default Testcase;
