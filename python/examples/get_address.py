import grpc
from proto import hub_pb2_grpc
from proto import messages_pb2

chan = grpc.insecure_channel('localhost:50051')
stub = hub_pb2_grpc.HubStub(chan)

# Here we get a new Deposit address
response = stub.GetDepositAddress(messages_pb2.GetDepositAddressRequest(userId='user-1', includeChecksum=True))
print("New address generated for 'user-1': ", response.address)
