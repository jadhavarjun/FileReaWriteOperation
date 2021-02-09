const list = require("./unorderList");
var userInput = require('readline-sync');
let fs = require('fs');

class fileOperation {
    readWriteFile() {
        var readStream = fs.readFileSync(
            'F:/Bridgelab/Data Structure/assests/readList.txt',
            'utf8'
        );
        console.log(readStream);

        let arr = readStream.split(' ');
        console.log(arr);

        arr.map((element) => list.add(element))

        console.log(list.printList());
        let beforeRemoveSize = list.size_of_list();
        console.log(beforeRemoveSize);

        userInput = userInput.question("Enter What You Want: ");
        list.removeElement(userInput);
        console.log(list.printList());
        let afterRemoveize = list.size_of_list();
        console.log(afterRemoveize);
        if (beforeRemoveSize == afterRemoveize) {
            list.add(userInput);
        }
        let outputData = list.printList()
        console.log(outputData);

        fs.writeFile(
            'F:/Fellowship Assignment/Data Structure/assests/write.txt',
            outputData,
            function (err) {
                if (err) throw err;
                console.log('Replaced!');
            }
        )
    }

}

module.exports = new fileOperation()