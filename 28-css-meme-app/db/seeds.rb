
User.destroy_all
Image.destroy_all
Meme.destroy_all


user1 = User.create(name: "Joe", username: "Salsa-Dude", password: "123");

image1 = Image.create(name: "Futurama Fry", url: "https://imgflip.com/s/meme/Futurama-Fry.jpg");
image2 = Image.create(name: "Matrix Morpheus", url: "https://imgflip.com/s/meme/Matrix-Morpheus.jpg");
image3 = Image.create(name: "Success Kid Original", url: "https://i.kym-cdn.com/photos/images/newsfeed/000/185/885/SANDCASTLES.png?1318627593");
image4 = Image.create(name: "The Most Interesting Man In The World", url: "https://ih0.redbubble.net/image.671085187.6832/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg");


meme1 = Meme.create(name: "Not sure if", user_id: user1.id, image_id: image1.id, input1: "Not sure if hungry", input2: "or just bored")

meme2 = Meme.create(name: "What if I told you", user_id: user1.id, image_id: image2.id, input1: "What if I told you", input2: "you can eat without posing it on instragram")

meme2 = Meme.create(name: "Success", user_id: user1.id, image_id: image3.id, input1: "Boss walks by", input2: "when I'm actually working")

meme2 = Meme.create(name: "Interesting", user_id: user1.id, image_id: image4.id, input1: "I don't always use internet explorer", input2: "But when I do, its to download a different browser")


