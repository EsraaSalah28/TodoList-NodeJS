const fs = require('fs');
const helpers = require('./helpers');

function parseCmdArgs(args) {
   const [, , command, ...options] = args;
   const parsedoptions = options.reduce((cum, elm) => {
      const [optionName, optinValue] = elm.split('=');
      cum[optionName] = optinValue;
      return cum;
   }, {})
   parsedoptions.command = command;
   return parsedoptions;

}

// function createIfNotExists(pathName){
//   if( !fs.existsSync(pathName)){
// //   {  const data =[]
// //     const jsonData =JSON.stringify(data)
//     fs.writeFileSync(pathName,'[]')
//   }
// }

checkFile = (pathName) => {
   if (!fs.existsSync(pathName)) {
      fs.writeFileSync(pathName, '[]');
   }
}

function main(cmdArgs) {

   const parsedArgs = parseCmdArgs(cmdArgs);
   switch (parsedArgs.command) {
      case 'add':
         helpers.add(parsedArgs)
         return;

      case 'edit':
         helpers.edit(parsedArgs)
         return;
      case 'remove':
         helpers.remove(parsedArgs);
         return;
      case 'list':
         helpers.list();
         return;
      case 'checked':
         helpers.checkedTodo();
         return;
         case 'unchecked':
         helpers.uncheckedTodo();
         return;
      default:
         return;
   }

}

checkFile('todo.json');
main(process.argv)