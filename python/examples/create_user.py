import grpc
from proto import hub_pb2_grpc
from proto import messages_pb2

chan = grpc.insecure_channel('localhost:50051')
stub = hub_pb2_grpc.HubStub(chan)

#This creates a new user and generates a deposit address
stub.CreateUser(messages_pb2.CreateUserRequest(userId='user-1'))

print("New user with id 'user-1' created!")
