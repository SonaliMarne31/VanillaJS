const indentation = 2;
const flatDirStructure = [];

const dirStructure = [
  {
    name: 'Root',
    type: 'dir',
    children: [
    {
        name: 'hello',
        type: 'dir',
        children: [
          { name: 'one.txt', type: 'file' },
          {
            name: 'world',
            type: 'dir',
            children: [
              {
                name: 'inner world',
                type: 'dir',
                children: [
                  { name: 'one_one.txt', type: 'file' },
                  { name: 'one_one.txt', type: 'file' },
                ]
              },
              { name: 'two.txt', type: 'file' },
              { name: 'three.txt', type: 'file' }
            ]
          },
          {
            name: 'outer world',
            type: 'dir',
            children: [
              { name: 'four.txt', type: 'file' },
              { name: 'five.txt', type: 'file' }
            ]
          }
        ]
      }
    ]
  }
];

const flattenDirStructure = (children, depth) => {
  if (children === undefined) { // means it is a file
        return true;
  } else {
    children.forEach(({ name, children }) => {
        const isFile = flattenDirStructure(children, depth + indentation);
        flatDirStructure.push({name,depth,isFile});
    });

    return false;
  }
};

const prettyPrint = () => {
    const output = [];

    flatDirStructure.reverse().forEach(({ name, depth }) => {
        const indentation = new Array(depth).fill('_').join('');
        output.push(`${indentation ? '|' : ''}${indentation}${name}`);
    });

    console.log(output.join(`\n`));
}

flattenDirStructure(dirStructure, 0);
prettyPrint();