import json
import boto3
def lambda_handler(event,context):
    print(event)
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('score')
    table.put_item(
        Item={
            'name': event["name"],    
            'score': event["score"],    
        }
    )
    return "success"