CREATE TABLE restaurants (id SERIAL PRIMARY KEY, 
                          name VARCHAR(50), 
                          logo_url VARCHAR(255),
                          application_url VARCHAR(255));

CREATE TABLE tags (id SERIAL PRIMARY KEY, 
                   name VARCHAR(50));

CREATE TABLE offers(id SERIAL PRIMARY KEY, 
                    name VARCHAR(50), 
                    restaurantId INT,
                    description VARCHAR(255),
                    image_URL VARCHAR(255),
                    price float,
                    FOREIGN KEY(restaurantId) REFERENCES restaurants(id));

CREATE TABLE offers_tags (id SERIAL PRIMARY KEY,
                          offerId INT,
                          tagId INT,
                          FOREIGN KEY(offerId) REFERENCES offers(id),
                          FOREIGN KEY(tagId) REFERENCES tags(id));

CREATE TABLE steps (id SERIAL PRIMARY KEY,
                    no INT,
                    text VARCHAR(255),
                    image_url VARCHAR(255),
                    link VARCHAR(255),
                    offerId INT,
                    FOREIGN KEY(offerId) REFERENCES offers(id));