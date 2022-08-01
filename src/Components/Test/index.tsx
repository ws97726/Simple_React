// import { Checkbox, Button } from 'antd';
// import React, { useState } from 'react';


// const filterList = (list, ele) => {
//     return list.filter(item => {
//         return !ele.some(items => item === items);
//     })
// }

// function Test() {
//     const [optionA, setOptionA] = useState(['a', 'b', 'c']);
//     const [optionB, setOptionB] = useState(['d', 'e', 'f']);
//     const [listA, setListA] = useState([]);
//     const [listB, setListB] = useState([]);
//     const OnChange = (e, type) => {
//         if (type === 'left') {
//             setListA(e);
//         } else {
//             setListB(e);
//         }
//     }
//     const onClick = (state) => {
//         if (state === 'right') {
//             setOptionA(filterList(optionA, listA));
//             setOptionB([...optionB, ...listA]);
//             setListA([]);
//         } else {
//             setOptionA([...optionA, ...listB]);
//             setOptionB(filterList(optionB, listB))
//             setListB([])
//         }
//     }
//     return (
//         <div>
//             <div>
//                 <Checkbox.Group
//                     options={optionA}
//                     onChange={(e) => OnChange(e, 'left')}
//                     value={listA}
//                 />
//             </div>
//             <div>
//                 <Button type='primary' onClick={() => onClick('right')} >》</Button>
//                 <Button type='primary' onClick={() => onClick('left')}>《</Button>
//             </div>
//             <div>
//                 <Checkbox.Group
//                     options={optionB}
//                     onChange={(e) => OnChange(e, 'right')}
//                     value={listB}
//                 />
//             </div>
//         </div>
//     )
// }

// export default Test;