import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import '@/global.scss';
import '@/global';
import { useGetStoreData } from './Hooks';

const App = () => {
  const [data, setData, delLocal] = useGetStoreData('userId');
  useEffect(() => {
    setData({ name: 'jack', age: 18 });
  }, [])
  console.log(data);
  const TREE_DATA = [
    {
      key: "a-1",
      children: [
        {
          key: "b-1",
          children: [
            { key: "c-1-1" },
            {
              key: "c-1-2",
              children: [
                {
                  key: "d-1-2-1",
                }
              ]
            }
          ],
        },
        { key: "b-2" },
        { key: "b-3" },
      ],
    },
    { key: "a-2" },

  ];

  const handleUnCheck = (treeData, perCheckedKedys, key) => {
    const treeFormat = (tree, initFlatTree = [], parentKey = "") => {
      const cacheTree = [...initFlatTree];
      tree.forEach((item) => {
        cacheTree.push({
          parentKey,
          key: item.key,
          children: (item?.children || []).map((v) => v.key),
        });

        if (item?.children?.length) {
          cacheTree.push(...treeFormat(item?.children, cacheTree, item.key));
        }
      });
      return cacheTree;
    };

    const flatTree = treeFormat(treeData);

    let newPerCheckedKedys = [...perCheckedKedys];
    // 取消current
    newPerCheckedKedys = newPerCheckedKedys.filter((item) => item !== key);

    const current = flatTree.find((item) => item.key === key) || {};
    // 取消children
    const onCancelChildren = (children = []) => {
      if (children.length) {
        children.forEach((childKey) => {
          newPerCheckedKedys = newPerCheckedKedys.filter(
            (item) => item !== childKey
          );
          const child = flatTree.find((item) => item.key === childKey);
          onCancelChildren(child?.children);
        });
      }
    };
    onCancelChildren(current?.children || []);

    // 取消parents
    const onCancelParents = (parentKey = "") => {
      if (!parentKey) return;
      const parent = flatTree.find((item) => item.key === parentKey);
      if (parent) {
        let flag = false;
        parent.children.forEach((childKey) => {
          if (newPerCheckedKedys.includes(childKey)) {
            flag = true;
          }
        });
        if (!flag) {
          newPerCheckedKedys = newPerCheckedKedys.filter(
            (item) => item !== parentKey
          );
          onCancelParents(parent.parentKey);
        }
      }
    };

    onCancelParents(current.parentKey);
    return newPerCheckedKedys
  };

  // handleUnCheck(TREE_DATA, ["a-1", "b-1", "c-1-1"], "c-1-1");
  // handleUnCheck(TREE_DATA, ["a-1", "b-1", "b-2", "c-1-1"], "c-1-1");
  const keys = handleUnCheck(TREE_DATA, ["a-1", "b-1", "c-1-2", 'd-1-2-1', "a-2"], "c-1-2");
  console.log(keys)//['a-2']




  //求一个字符串的最长不重复子串 给定"abcabcabcbb"的答案是"abc" 给定"120135435"答案是"201354", 
  // const filterStr = (s) => {
  //   // eslint-disable-next-line prefer-const
  //   let arr = [], result = [];
  //   for (let i = 0; i < s.length; i++) {
  //     const index = arr.indexOf(s[i])
  //     if (index !== -1) {
  //       arr.splice(0, index + 1);
  //     }
  //     arr.push(s[i])
  //     result.push(Object.assign([], arr));
  //   }
  //   return result;
  // }
  // const fn = function (arr) {
  //   let long = 0
  //   let value = '';
  //   for (let i = 0; i < arr.length; i++) {
  //     const temp = arr[i].length
  //     if (temp >= long) {
  //       long = temp
  //       value = arr[i]
  //     }
  //   }
  //   return value;
  // }
  // const str = JSON.parse(JSON.stringify(fn(filterStr('120135435'))));
  // console.log(str.join(''))



  return <div onClick={() => {
    delLocal();
  }}>
    1111
  </div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
