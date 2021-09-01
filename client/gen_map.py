from bson.objectid import ObjectId
import pymongo
from pymongo.collection import ReturnDocument
from tqdm import tqdm
from bson import ObjectId

db_str = "mongodb://wiz:Bananacake123@159.89.8.242:27017/randomanga?authSource=admin&w=1"
client = pymongo.MongoClient(db_str)
db = client.get_database('randomanga')
lists_collection = db.lists

lists = lists_collection.find({})
for list in lists:
    print(f'''
<url>
<loc>https://randomanime.net/lists/{list['_id']}</loc>
<changefreq>monthly</changefreq>
<lastmod>2021-08-28</lastmod>
</url>
          
          ''')
