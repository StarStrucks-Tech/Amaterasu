PROTO_FILE_NAME="src/protos/dummy.proto"
npx proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=src/gencode ${PROTO_FILE_NAME}
