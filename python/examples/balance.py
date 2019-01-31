import grpc
from proto import hub_pb2_grpc
from proto import messages_pb2

chan = grpc.insecure_channel('localhost:50051')
stub = hub_pb2_grpc.HubStub(chan)

# Get the Balance for user-1
response = stub.GetBalance(messages_pb2.GetBalanceRequest(userId='user-1'))
print("{}i available for test 'user-1'".format(response.available))

# This gets the History for the test user including all deposits
response = stub.GetUserHistory(messages_pb2.GetUserHistoryRequest(userId='user-1', newerThan=0))
print('History:')
print(response)
