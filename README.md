# Sample AngularFire2 with Angular CLI Application
The name is shortened to "afwithngcli"

This application was built to demonstrated the nested AngularFire2 functionality demonstrated in this youtube video https://youtu.be/ngnSOTSS8Q8?t=1h6m37s

What we have is the following data structure

```json
{
  "items":
      {
          "item1":{
              "name": "Item 1",
              "description": "Description for Item One"
          },
          "item2":{
              "name": "Item 2",
              "description": "abcd"
          }
      }
  "items_meta"{
      "item1":{
          "stockPrice": 12.34,
          "moreData": "more data on the stock price"
      },
      "item2":{
          "stockPrice": 386,
          "moreData": "lolz"
      }
  }
}
```

And we are trying to get a result that looks like this

```json
"item1":{
    "name": "Item 1",
    "description": "Description for Item One",
    "meta" : {
        "stockPrice": 12.34,
        "moreData": "more data on the stock price"      
    }
},
```
So this is how we access the data using AngularFire2
```Javascript
  this.projects = af.list('/items').map((items) => {
    return items.map(item => {
      item.metadata = af.object('/items_meta/' + item.$key);
      return item;
    });
```
First we get the initial list of items `af.list('/items')` then we loop through the items and extract the item metadata using the `$key` from
the current item as the part of the path for the next AngularFire2 query.

The second query `af.object('/items_meta/' + item.$key)` will add a new property to the original item and that propery will be another observable.

You access the observable(s) in the UI by using the async pipe which will update the data in the UI as the data changes in Firebase. The html 
code for the UI looks something like this.

```html
<ul *ngFor="let item of projects | async">
  <li class="text">
    {{item.name}}
  </li>
  <p>
    {{(item.metadata | async)?.moreData}}
  </p>
    <p>
    {{(item.metadata | async)?.stockPrice}}
  </p>
</ul>
```
If you notice this code `(item.metadata | async)?.stockPrice`, we are using the elvis operator to make sure that the observable has some data in it before trying to access the properties `moreData` and `stockPrice`. I have to believe there is a cleaner way to code that up, but this is what I have for now. 

Please provide feedback if you have any.

###Additional Content & Links
- [Firebase](https://www.firebase.com)
- [AngularFire2 Documentation](https://angularfire2.com/api/)
- [More Content and Samples on Firebase from my blog](http://www.clearlyinnovative.com/?s=firebase)
