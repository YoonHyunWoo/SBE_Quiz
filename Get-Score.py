import json
import boto3
def lambda_handler(event,context):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('score')
    response = table.scan()
    return response["Items"]