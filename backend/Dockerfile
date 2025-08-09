FROM python:3
RUN apt-get update && apt-get install -y curl

WORKDIR /usr/src/app

# This tells Python to look for modules in your app's root directory
ENV PYTHONPATH /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# This copies ALL your application code (including 'src' and 'dal')
COPY . .

# This is the command to run your server
CMD ["uvicorn", "src.server:app", "--host", "0.0.0.0", "--port", "3001"]