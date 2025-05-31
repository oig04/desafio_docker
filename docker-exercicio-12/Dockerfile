FROM python:3.9-slim

WORKDIR /app

RUN adduser --disabled-password --gecos '' appuser &&     chown -R appuser /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

USER appuser

CMD ["python", "app.py"]
