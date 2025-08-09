FROM python:3
RUN apt-get update && apt-get install -y curl

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# This line copies your 'src' folder into the container
COPY ./src ./src

# You might also have this line to copy other root files if any
# COPY . .