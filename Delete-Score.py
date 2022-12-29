import json
import boto3


dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('score')

tables = table.scan()

for i in tables["Items"]:
    table.delete_item(
        Key={
            "name" : i["name"]
        }
    )