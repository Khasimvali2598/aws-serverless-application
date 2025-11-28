import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('serverless-web-application-on-aws')

def lambda_handler(event, context):

    # Get current views
    response = table.get_item(Key={'id': '0'})
    views = response['Item']['views']

    # Increment view count
    views += 1

    # Save new view count
    table.put_item(Item={'id': '0', 'views': views})

    # Return JSON for frontend
    return {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps({"views": views})
    }
