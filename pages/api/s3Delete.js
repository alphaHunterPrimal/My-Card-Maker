import aws from "aws-sdk"



export async function deleteAWSrecord(name){
    const region = "sa-east-1"
const bucketName = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME
const accessKeyId =  process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID 
const secretAccessKey = process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY

const s3 = new aws.S3()
 
aws.config.setPromisesDependency(require('bluebird'));
aws.config.update({ 
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,//process.env.aws_secret_access_key,
   region: region,
   signatureVersion: 'latest', });

   
    
    
    const imageName = name.split(" ").join("_");
    const params = ({
      Bucket: bucketName,
      Key: imageName,
    })
    

    try{
      const data = await s3.deleteObject(params).promise();
      console.log(data)
    } catch(err){alert(err)}

  
  
  }