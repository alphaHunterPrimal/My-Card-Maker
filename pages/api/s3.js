import aws from "aws-sdk"
//require('dotenv/config');
//import dotenv from "dotenv"

//dotenv.config()


/*
export async function generateUploadURL() {
    const imageName = "test"
  

    const params = ({
      Bucket: bucketName,
      Key: imageName,
      Expires: 60
    })
    
    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL
  }*/

export async function upload64(base64, name){

  const region = "sa-east-1"
  const bucketName = "galery-card-images"
  const accessKeyId =  process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID //"AKIA6OYYWLV6MBCVGNHK"//
  const secretAccessKey = process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY //"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"//
  
  aws.config.setPromisesDependency(require('bluebird'));
    aws.config.update({
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
       region: region,
       signatureVersion: 'v4', });
  
  const s3 = new aws.S3()


  const base64Data = new Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ""), 'base64');
  console.log(base64Data)

  const imageName = name.split(" ").join("_");

  const type = base64.split(';')[0].split('/')[1];
  console.log(type)
  const params = ({
    Bucket: bucketName,
    Key: imageName,
    Body: base64Data,
    ContentEncoding: 'base64', // required
    ContentType: `image/${type}`, //required
    Expires: 60
  })

  let location = '';
  let key = '';
  try {
    const { Location, Key } = await s3.upload(params).promise();
    location = Location;
    key = Key;
  } catch (error) {
     console.log(error)
    }
  
  // Save the Location (url) to your database and Key if needs be.
  // As good developers, we should return the url and let other function do the saving to database etc
  console.log(location, key);
  
  return location;
  
  // To delete, see: https://gist.github.com/SylarRuby/b3b1430ca633bc5ffec29bbcdac2bd52
}
