// 'use client';

// import { supabase } from '@/lib/supabase';
// import {  deleteNodeData } from '@/src/api';
// import { useEffect, useState } from 'react';

// const Login = () => {
//   const [id, setId] = useState('');

//   useEffect(() => {
//     const getUser = async () => {
//       const user = await supabase.auth.getUser();
//       const userId = user.data.user?.id;
//       userId && setId(userId);
//     };
//     getUser();
//   }, []);
//   const Test = async () => {
//     const data = deleteNodeData({
//       db: 'front_node_depth1',
//       node_id: 10,
//       user_id: id,
//     });
//     console.log(data);
//   };
//   return (
//     <button className="mt-[400px]" onClick={Test}>
//       button
//     </button>
//   );
// };

// export default Login;
