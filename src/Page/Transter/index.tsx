// import { Checkbox, Button } from 'antd';
// import React, { useEffect, useState } from 'react';

// const filterItem = (option, items) => {
//     return option.filter((ele: string) => {
//         return !items.some((item: string) => item === ele)
//     })
// }

// export default () => {
//     const [disableA, setDisableA] = useState<boolean>(true);
//     const [disableB, setDisableB] = useState<boolean>(true);
//     const [optionA, setOptionA] = useState<any>(['a', 'b', 'c']);
//     const [optionB, setOptionB] = useState<any>(['d', 'e', 'f']);
//     const [listA, setListA] = useState([]);
//     const [listB, setListB] = useState([]);

//     const onClick = (type: string) => {
//         if (type === 'left') {
//             setOptionA([...optionA, ...listB]);
//             setOptionB(filterItem(optionB, listB));
//             setListB([]);
//         } else {
//             setOptionA(filterItem(optionA, listA));
//             setOptionB([...optionB, ...listA]);
//             setListA([]);
//         }
//     }

//     useEffect(() => {
//         setDisableA(listA.length === 0)
//     }, [listA])
//     useEffect(() => {
//         setDisableB(listB.length === 0)
//     }, [listB])

//     const onChange = (e: any, type: string) => {
//         if (type === 'right') {
//             setListA(e);
//         } else {
//             setListB(e);
//         }
//     }


//     return (
//         <div style={{ display: 'flex' }}>
//             <div style={{ width: 30 }}>
//                 <Checkbox.Group
//                     options={optionA}
//                     onChange={(e) => onChange(e, 'right')}
//                     value={listA}
//                 />
//             </div>
//             <div style={{ margin: '0 80px', width: 50 }}>
//                 <Button disabled={disableA} onClick={() => onClick('right')}>》</Button>
//                 <Button disabled={disableB} onClick={() => onClick('left')}>《</Button>
//             </div>
//             <div style={{ width: 30 }}>

//                 <Checkbox.Group
//                     options={optionB}
//                     onChange={(e: any) => onChange(e, 'left')}
//                     value={listB}
//                 />
//             </div>

//         </div>
//     )
// }
